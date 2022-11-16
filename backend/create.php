<?php
    require_once('connect.php');
    session_start();

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $message = array();

    $emp_name = $data ['emp_name'];
    $emp_gender = $data ['emp_gender'];
    $email = $data ['email'];
    $contact_number = $data ['contact_number'];
    $home_add = $data ['home_add'];

    //create the sql query
    $query = mysqli_query($con, "insert into students_tbl(emp_name, emp_gender, email, contact_number,home_add, reg_date) values
    ('$emp_name', '$emp_gender', '$email', '$contact_number', '$home_add', NOW())");
    if($query){
        http_response_code(201);
        $message['status'] = "Success....";
    }else{
        http_response_code(422);
        $message['status'] = 'Error....';
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>