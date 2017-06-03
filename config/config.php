<?php

$config = new myConfig();
$config->setPath('C:/xampp/htdocs/LibretaDeContactos/');

$config->setDrive('pgsql');
$config->setHost('localhost');
$config->setPort(5432);
$config->setUser('postgres');
$config->setPassword('123');
$config->setDbname('dbcontacto');
$config->setHash('md5');

$config->setUrl('http://localhost/LibretaDeContactos/www/');