import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;

        const responseBody = exception.getResponse();

        response
            .status(status)
            .json({
                errorDetail: responseBody,
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}