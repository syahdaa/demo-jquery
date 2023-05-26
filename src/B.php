<?php 

    if (isset($_POST['teks']) && isset($_POST['angka'])) {
        $teks = $_POST['teks'];
        $angka = intval($_POST['angka']);

        $data = array();

        for ($i=0; $i < $angka; $i++) { 
            $data[$i] = $teks;
        }

        header('Content-Type: application/json');
        echo json_encode($data);
        exit();

    } else {

        header('Content-Type: application/json');
        echo json_encode("Tidak ada data yang dimasukkan");
        exit();
    }

?>