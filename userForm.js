function userForm (req, resp) {

    resp.writeHead(200, {'content-type': 'text/html'});
    resp.write(`
        <form action="/submit" method="post">
             <input type="text" placeholder="enter name" name="name"/>
             <input type="text" placeholder="enter email" name="email"/>
            <button>Submit</button>
         </form>
        `);
}

module.exports = userForm;