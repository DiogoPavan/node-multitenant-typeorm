export {};

declare global {
  namespace Express {
    interface Request {
      tenantSlug: string;
    }
  }
}
