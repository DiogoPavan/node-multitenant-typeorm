import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tenant' })
class Tenant extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'tenant_id' })
  tenantId!: number;

  @Column({ name: 'tenant_slug' })
  tenantSlug!: string;

  @Column({ name: 'db_name' })
  dbName!: string;

  @Column({ name: 'db_host' })
  dbHost!: string;

  @Column({ name: 'db_username' })
  dbUsername!: string;

  @Column({ name: 'db_password' })
  dbPassword!: string;

  @Column({ name: 'db_port' })
  dbPort!: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}

export default Tenant;
