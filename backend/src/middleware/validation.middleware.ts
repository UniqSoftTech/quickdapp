import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { failed } from '../utils/res.utils';

export const validateContractGetMetadata = [
  body('address').not().isEmpty(),
  // body('network').isURL().withMessage('Invalid network '),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
      return failed({ res, err: errors.array() });
    
    next();
  }
];