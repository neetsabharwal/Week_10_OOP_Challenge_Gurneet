const employees = require('../index.js')

function template(){
console.log(employees);
 return
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./Assets/css/styles.css">
    <title>TeamViewer</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section>
        <div class="outbox">
            <div>
                <h3>Jared</h3>
                <i class="fa fa-coffee"></i><h4>Manager</h4>
            </div>
            <div>
                <h5>ID: 1</h5>
                <h5><a href="mailto:abc@def.com">Email: abc@def.com</a></h5>
                <h5>Phone: 1234567890</h5>
            </div>
        </div>
        <div class="outbox">
            <div>
                <h3>Sunny</h3>
                <i class="fa fa-book"></i><h4>Engineer</h4>
            </div>
            <div>
                <h5>ID: 2</h5>
                <h5><a href="mailto:abc@def.com">Email: abc@def.com</a></h5>
                <h5>Github: <a href="https://github.com/username" target="_blank">username</h5>
            </div>
        </div>
        <div class="outbox">
            <div>
                <h3>Bacha</h3>
                <i class="fa fa-child"></i><h4>Intern</h4>
            </div>
            <div>
                <h5>ID: 1</h5>
                <h5><a href="mailto:abc@def.com">Email: abc@def.com</a></h5>
                <h5>Phone: 1234567890</h5>
            </div>
        </div>
    </section>
</body>
</html>`
}

template();