import IORedis from 'ioredis';

interface Cache {
  redis: IORedis.Redis;
}

class Cache {
  constructor() {
    this.redis = new IORedis({
      port: 6379,
      host: process.env.REDIS_HOST,
      keyPrefix: 'cache:',
    });
  }

  set(key: string, value: any) {
    // Redis não aceita array, objetos, etc.. sempre stringify
    // EX: para expirar o cache na quantidade de tempo em segundos
    // 86400 = segundos em 24 horas (60 * 60 * 24)
    return this.redis.set(key, JSON.stringify(value), 'EX', 60 * 60 * 24);
  }

  async get(key: string) {
    const cached = await this.redis.get(key);

    return cached ? JSON.parse(cached) : null;
  }

  invalidate(key: string) {
    return this.redis.del(key);
  }

  async invalidatePrefix(prefix: string) {
    const keys = await this.redis.keys(`cache:${prefix}:*`);

    const keysWithoutPrefix = keys.map(key => key.replace('cache:', ''));

    return this.redis.del(keysWithoutPrefix);
  }
}

export default new Cache();
