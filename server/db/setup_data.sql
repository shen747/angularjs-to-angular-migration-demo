DROP DATABASE IF EXISTS ajstoa;
CREATE DATABASE ajstoa;
CREATE USER IF NOT EXISTS ramesh;
GRANT ALL ON DATABASE ajstoa TO ramesh;

CREATE TABLE ajstoa.homes (homeid INT PRIMARY KEY DEFAULT unique_rowid() ,name VARCHAR,email VARCHAR,phone VARCHAR,address VARCHAR);

INSERT INTO ajstoa.homes (homeid,name,email,phone,address)
 VALUES 
 (DEFAULT,'Enderamulla My Parents Home','shen747@gmail.com','0432697284','189/4 Uswatta Lane,Enderamulla,Wattala,11300,Sri Lanka'),
 (DEFAULT,'Cecil Uncles Home','shen747@gmail.com','0432697284','182 Fitzwilliam Road,Toongabbie,2146,NSW,Australia'),
 (DEFAULT,'Sujith Ayyas Home','shen747@gmail.com','0432697284','50 Olive Road,Hampton Park,3976,VIC,Australia'),
 (DEFAULT,'My Dandenong Apartment Home','shen747@gmail.com','0432697284','2-4 Hutton Street,Dandenong,3175,VIC,Australia'),
 (DEFAULT,'Pakenham Home','shen747@gmail.com','0432697284','11 Taunton Drive,Pakenham,3810,VIC,Australia'),
 (DEFAULT,'Cobblebank Home','shen747@gmail.com','0432697284','38 Stonehenge Drive,Cobblenbank,3338,VIC,Australia');