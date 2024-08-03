interface IResType {
  message?: string;
  status?: number;
  data?: any;
  res: any;
  err?: any;
}

export function failed({ res, message = "FAILED", err = "Bad Request", status = 400 }: IResType) {
  res.status(status).json({
    message: message,
    success: false,
    error: err,
  });
};