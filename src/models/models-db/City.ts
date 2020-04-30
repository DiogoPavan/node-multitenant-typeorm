import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import User from './User';

@Entity()
class City extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'city_id' })
  cityId!: number;

  @Column()
  name!: string;

  @Column({ name: 'zip_code' })
  zipCode!: string;
}

export default City;
