function template(employees) {

    let enggdivs = '';
    let interndivs = '';
    for(i=0;i<employees.length;i++){
        if(employees[i].role==='Engineer'){
            enggdivs += `<div class="outbox engineer">
            <div>
                <h3>${employees[i].name}</h3>
                <i class="fa fa-book"></i><h4>Engineer</h4>
            </div>
            <div>
                <h5>ID: ${employees[i].id}</h5>
                <h5><a href="mailto:${employees[i].email}">Email: ${employees[i].email}</a></h5>
                <h5>Github: <a href="https://github.com/${employees[i].username}" target="_blank">${employees[i].username}</a></h5>
            </div>
        </div>`
        }
    }
    
    for(i=0;i<employees.length;i++){
        if(employees[i].role==='Intern'){
            interndivs += `<div class="outbox intern">
            <div>
                <h3>${employees[i].name}</h3>
                <i class="fa fa-child"></i><h4>Intern</h4>
            </div>
            <div>
                <h5>ID: ${employees[i].id}</h5>
                <h5><a href="mailto:${employees[i].email}">Email: ${employees[i].email}</a></h5>
                <h5>School: ${employees[i].school}</h5>
            </div>
        </div>`
        }
    }

    return `<!DOCTYPE html>
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
        ${enggdivs}
        ${interndivs}
    </section>
</body>
</html>`
}

module.exports = template;