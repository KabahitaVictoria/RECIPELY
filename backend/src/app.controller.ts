import { Controller, Get } from '@nestjs/common';

/**
 * AppController
 *
 * Simple test endpoints to verify backend is working
 */
@Controller()
export class AppController {
  /**
   * GET /
    
   * Basic health check endpoint
   */
  @Get()
  getHello() {
    return {
      message: 'Welcome to Recipely API!',
      status: 'Server is running',
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GET /test
   
   * Simple test endpoint
   */
  @Get('test')
  getTest() {
    return {
      success: true,
      message: 'Connection successful! Frontend ↔️ Backend working! 🎉',
      data: {
        frontend: 'React + Vite',
        backend: 'NestJS',
        author: 'Victoria Kabahita',
      },
    };
  }
}
