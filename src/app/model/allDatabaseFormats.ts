import { DatabaseFormat } from './format';


export const DATABASEFORMATS: DatabaseFormat[] = [
    { driver: 'CSV', preUrl: 'jdbc:relique:csv:', fullDriver: 'org.relique.jdbc.csv.CsvDriver'},
    { driver: 'DERBY', preUrl: 'jdbc:derby:', fullDriver: 'org.apache.derby.jdbc.EmbeddedDriver'},
    { driver: 'H2', preUrl: 'jdbc:h2:file:', fullDriver: 'org.h2.Driver'},
    { driver: 'HSQLDB', preUrl: 'jdbc:hsqldb:', fullDriver: 'org.hsqldb.jdbcDriver '},
    { driver: 'SQLITE', preUrl: 'jdbc:sqlite:', fullDriver: 'org.sqlite.JDBC'},
    { driver: 'MYSQL', preUrl: 'jdbc:mysql:', fullDriver: 'com.mysql.jdbc.Driver'},
    { driver: 'MARIADB', preUrl: 'jdbc:mariadb:', fullDriver: 'org.mariadb.jdbc.Driver'},
    { driver: 'ORACLE', preUrl: 'jdbc:oracle:thing:', fullDriver: 'oracle.jdbc.driver'},
    { driver: 'POSTGRESQL', preUrl: 'jdbc:postgresql:', fullDriver: 'com.sap.db.jdbc.Driver'},
    { driver: 'HANA', preUrl: 'jdbc:sap:', fullDriver: 'com.sap.db.jdbc.Driver'},
    { driver: 'JTDS', preUrl: 'jdbc:jtds:', fullDriver: 'net.sourceforge.jtds.jdbc.Driver'},
    { driver: 'SQLSERVER', preUrl: 'jdbc:sqlserver:', fullDriver: 'com.microsoft.sqlserver.jdbc.SQLServerDriver'},
    { driver: 'FIREBIRD', preUrl: 'jdbc:firebirdsql:', fullDriver: 'org.firebirdsql.jdbc.FBDriver'},
    { driver: 'DB2', preUrl: 'jdbc:db2:', fullDriver: 'com.ibm.db2.jcc.DB2Driver '},
    { driver: 'DB2_AS400', preUrl: 'jdbc:as400:', fullDriver: 'com.ibm.as400.access.AS400JDBCDriver '},
    { driver: 'TERADATA', preUrl: 'jdbc:teradata:', fullDriver: 'com.teradata.jdbc.TeraDriver '},
    { driver: 'INFORMIX', preUrl: 'jdbc:informix-sqli', fullDriver: 'com.informix.jdbc.IfxDriver '}
];
