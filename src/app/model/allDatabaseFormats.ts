import { DatabaseFormat } from './format';


export const DATABASEFORMATS: DatabaseFormat[] = [
    { driver: 'CSV', preUrl: 'jdbc:relique:csv:'},
    { driver: 'DERBY', preUrl: 'jdbc:derby:'},
    { driver: 'H2', preUrl: 'jdbc:h2:'},
    { driver: 'HSQLDB', preUrl: 'jdbc:hsqldb:'},
    { driver: 'SQLITE', preUrl: 'jdbc:sqlite:'},
    { driver: 'MYSQL', preUrl: 'djbc:mysql:'},
    { driver: 'MARIADB', preUrl: 'jdbc:mariadb:'},
    { driver: 'GAE', preUrl: ''},
    { driver: 'ORACLE', preUrl: 'jdbc:oracle:thing:'},
    { driver: 'POSTGRESQL', preUrl: 'jdbc:postgresql:'},
    { driver: 'HANA', preUrl: 'jdbc:sap:'},
    { driver: 'JTDS', preUrl: 'jdbc:jtds:'},
    { driver: 'SQLSERVER', preUrl: 'jdbc:sqlserver:'},
    { driver: 'FIREBIRD', preUrl: 'jdbc:firebirdsql:'},
    { driver: 'DB2', preUrl: 'jdbc:db2:'},
    { driver: 'DB2_AS400', preUrl: 'jdbc:as400:'},
    { driver: 'TERADATA', preUrl: 'jdbc:teradata:'},
    { driver: 'INFORMIX', preUrl: 'jdbc:informix-sqli:'}
];
