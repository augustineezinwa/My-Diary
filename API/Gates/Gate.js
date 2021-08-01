import { validationResult } from 'express-validator';
import decodeToken from '../security/decodeToken';
import formatErrors from '../helpers/formatErrors';
import models from '../models';

const { Memory } = models;

class Gate {
  static collectErrors(request, response, next) {
    delete request.resourceBag;
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: formatErrors(errors) });
    }
    return next();
  }

  static blockInvasion(request, response, next) {
    const tokenInBrowser = request.headers.authorization;

    if (!tokenInBrowser) {
      return response.status(401).json({
        message: 'Not authorized!, No credentials',
      });
    }

    try {
      request.userWallet = decodeToken(tokenInBrowser);
      return next();
    } catch (e) {
      return response.status(401).json({
        message: 'Not authorized!, Invalid credentials',
      });
    }
  }

  static async blockAccessToAnotherUserResource(request, response, next) {
    try {
      const resource = await Memory.findOne({
        where: { userId: request.userWallet.id, id: request.params.id },
      });

      if (!resource) {
        return response.status(403).json({
          message: 'You don\'t have access to this resource'
        });
      }
      request.resourceBag = resource;
    
      return next();
    } catch (error) {
      return response.status(500).json({
        message: 'Internal server error', error
      });
    }
  }
}

export default Gate;
