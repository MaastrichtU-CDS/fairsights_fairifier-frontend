import { databaseFormat } from './format';


export const DATABASEFORMATS: databaseFormat[] = [
    { driver: 'CSV', preUrl: 'jdbc:relique:csv:'},
    { driver: 'DERBY', preUrl: ''},
    { driver: 'H2', preUrl: ''},
    { driver: 'HSQLDB', preUrl: ''},
    { driver: 'SQLITE', preUrl: ''},
    { driver: 'MYSQL', preUrl: ''},
    { driver: 'MARIADB', preUrl: ''},
    { driver: 'GAE', preUrl: ''},
    { driver: 'ORACLE', preUrl: ''},
    { driver: 'POSTGRESQL', preUrl: ''},
    { driver: 'HANA', preUrl: ''},
    { driver: 'JTDS', preUrl: ''},
    { driver: 'SQLSERVER', preUrl: ''},
    { driver: 'FIREBIRD', preUrl: ''},
    { driver: 'DB2', preUrl: ''},
    { driver: 'DB2_AS400', preUrl: ''},
    { driver: 'TERADATA', preUrl: ''},
    { driver: 'INFORMIX', preUrl: ''}
]