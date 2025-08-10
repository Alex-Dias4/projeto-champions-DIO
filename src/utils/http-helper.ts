import { httpResponse } from "../models/httpResponse-model";

// 1xx - Informativas
export const continueRequest = async (): Promise<httpResponse> => ({
    statusCode: 100,
    body: { message: "Continue" }
});

export const switchingProtocols = async (): Promise<httpResponse> => ({
    statusCode: 101,
    body: { message: "Switching Protocols" }
});

export const processing = async (): Promise<httpResponse> => ({
    statusCode: 102,
    body: { message: "Processing" }
});

// 2xx - Sucesso
export const ok = async (data: any): Promise<httpResponse> => ({
    statusCode: 200,
    body:{
        data: data,
        message: "sucesseful"
        }
});

export const created = async (data: any): Promise<httpResponse> => ({
    statusCode: 201,
    body: data
});

export const accepted = async (data: any): Promise<httpResponse> => ({
    statusCode: 202,
    body: data
});

export const noContent = async (): Promise<httpResponse> => ({
    statusCode: 204,
    body: null
});

// 3xx - Redirecionamento
export const movedPermanently = async (location: string): Promise<httpResponse> => ({
    statusCode: 301,
    body: { location }
});

export const found = async (location: string): Promise<httpResponse> => ({
    statusCode: 302,
    body: { location }
});

export const notModified = async (): Promise<httpResponse> => ({
    statusCode: 304,
    body: null
});

// 4xx - Erros do Cliente
export const badRequest = async (message: string): Promise<httpResponse> => ({
    statusCode: 400,
    body: { error: message }
});

export const unauthorized = async (message: string = "Unauthorized"): Promise<httpResponse> => ({
    statusCode: 401,
    body: { error: message }
});

export const paymentRequired = async (message: string = "Payment Required"): Promise<httpResponse> => ({
    statusCode: 402,
    body: { error: message }
});

export const forbidden = async (message: string = "Forbidden"): Promise<httpResponse> => ({
    statusCode: 403,
    body: { error: message }
});

export const notFound = async (message: string = "Not Found"): Promise<httpResponse> => ({
    statusCode: 404,
    body: { error: message }
});

export const methodNotAllowed = async (message: string = "Method Not Allowed"): Promise<httpResponse> => ({
    statusCode: 405,
    body: { error: message }
});

export const notAcceptable = async (message: string = "Not Acceptable"): Promise<httpResponse> => ({
    statusCode: 406,
    body: { error: message }
});

export const requestTimeout = async (message: string = "Request Timeout"): Promise<httpResponse> => ({
    statusCode: 408,
    body: { error: message }
});

export const conflict = async (message:string): Promise<httpResponse> => ({
    statusCode: 409,
    body: { error: `Conflict, ${message}` }
});

export const gone = async (message: string = "Gone"): Promise<httpResponse> => ({
    statusCode: 410,
    body: { error: message }
});

export const unsupportedMediaType = async (message: string = "Unsupported Media Type"): Promise<httpResponse> => ({
    statusCode: 415,
    body: { error: message }
});

export const tooManyRequests = async (message: string = "Too Many Requests"): Promise<httpResponse> => ({
    statusCode: 429,
    body: { error: message }
});

// 5xx - Erros do Servidor
export const internalServerError = async (message: string = "Internal Server Error"): Promise<httpResponse> => ({
    statusCode: 500,
    body: { error: message }
});

export const notImplemented = async (message: string = "Not Implemented"): Promise<httpResponse> => ({
    statusCode: 501,
    body: { error: message }
});

export const badGateway = async (message: string = "Bad Gateway"): Promise<httpResponse> => ({
    statusCode: 502,
    body: { error: message }
});

export const serviceUnavailable = async (message: string = "Service Unavailable"): Promise<httpResponse> => ({
    statusCode: 503,
    body: { error: message }
});

export const gatewayTimeout = async (message: string = "Gateway Timeout"): Promise<httpResponse> => ({
    statusCode: 504,
    body: { error: message }
});
