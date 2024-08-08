interface IResType {
  message?: string;
  status?: number;
  result?: any;
  res: any;
  err?: any;
  success?: boolean;
}

export function failed({ res, message = "FAILED", err = "Internal Server Error", status = 500 }: IResType) {
  res.status(status).json({
    message: message,
    success: false,
    error: err,
  });
};

export function success({ res, message = "OK", status = 200, result }: IResType) {
  res.status(status).json({
    message: message,
    success: true,
    result
  });
};

export function send({ res, message = "OK", status = 200, result, err, success = true }: IResType) {
  res.status(status).json({
    message,
    success,
    result,
    err,
  });
};