import { API_URL } from "@/configs/global";

import axios from "axios";
import {
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnhandledException,
  UnauthorizedError,
  ValidationError,
} from "@/types/http-errors.interface";

type ApiError =
  | BadRequestError
  | NetworkError
  | NotFoundError
  | UnauthorizedError
  | UnhandledException
  | ValidationError;
export const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;
        if (statusCode === 400 && !errorData.errors) {
          throw {
            ...errorData,
          } as BadRequestError;
        }
        if (statusCode === 400 && !errorData.errors) {
          throw {
            ...errorData,
          } as ValidationError;
        }
        if (statusCode === 404) {
          throw {
            ...errorData,
            detail: "سرویس مورد نظر یافت نشد",
          } as NotFoundError;
        }
        if (statusCode === 403) {
          throw {
            ...errorData,
            detail: "دسترسی به سرویس مورد نظر امکان پذیر نیست",
          } as UnauthorizedError;
        }
        if (statusCode >= 500) {
          throw {
            ...errorData,
            detail: "خطای سرویس",
          } as UnhandledException;
        }
      } else {
        throw {
          detail: "خطای شبکه",
        } as NetworkError;
      }
    }
  }
);
