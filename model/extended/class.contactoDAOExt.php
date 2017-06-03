<?php

class contactoDAOExt extends contactoDAO {
    public function selectFamilia() {
	$sql = 'SELECT con_id, con_foto, con_nombre, con_telefono, con_direccion, con_grupo FROM contacto WHERE con_grupo = "familia" AND con_deleted_at IS NULL';
	return $this->query($sql);
  }
}
