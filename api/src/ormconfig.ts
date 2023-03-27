const ORMConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'sneakerforall',
  username: 'postgres',
  password: '1',
  autoLoadEntities: true,
  synchronize: true,
};

export default ORMConfig;
