const template = (employees) => {
 return
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../Assets/css/styles.css">
    <title>TeamViewer</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section>
        <div class="outbox">
            <div>
                <h3>${employees[0].name}</h3>
                <i class="fa fa-coffee"></i><h4>Manager</h4>
            </div>
            <div>
                <h5>ID: ${employees[0].id}</h5>
                <h5><a href="mailto:${employees[0].email}">Email: ${employees[0].email}</a></h5>
                <h5>Phone: 1234567890</h5>
            </div>
        </div>
        <div class="outbox">
            <div>
                <h3>${employees[1].name}</h3>
                <i class="fa fa-book"></i><h4>Engineer</h4>
            </div>
            <div>
                <h5>ID: ${employees[1].id}</h5>
                <h5><a href="mailto:${employees[1].email}">Email: ${employees[1].email}</a></h5>
                <h5>Github: <a href="https://github.com/${employees[1].username}" target="_blank">${employees[1].username}</h5>
            </div>
        </div>
        <div class="outbox">
            <div>
                <h3>${employees[2].name}</h3>
                <i class="fa fa-child"></i><h4>Intern</h4>
            </div>
            <div>
                <h5>ID: ${employees[2].id}</h5>
                <h5><a href="mailto:${employees[2].email}">Email: ${employees[2].email}</a></h5>
                <h5>School: ${employees[2].school}</h5>
            </div>
        </div>
    </section>
</body>
</html>`
}

module.exports = template;