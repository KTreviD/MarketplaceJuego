const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
const mysql = require('mysql');
const session = require("express-session");
//const MySQLStore = require("express-mysql-session")(session);

const conexionData = {
						host: 'localhost',
						port: 3306,
						database: 'juego',
						user: 'root',
						password: ''
					};


/*const sessionStore = new MySQLStore(conexionData);
var sessionStore = new MySQLStore({
	expiration: 10800000,
	createDataBaseTable: true,
	schema:
	{
		tableName: 'usuarios',
		columNames:
		{
			Usuario: 'Usuario',
		}
	}
}, conexion);*/ //intentar con solo usar la misma variable conexion

/*app.use( session({
	key:'cookie_usuario',
    secret: '12345678',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));*/

app.post('/api/login', async (req, res) =>
{
	//FALTA LA ENCRIPTACION DE LA CONTRASEÑA 
	const Email = req.body.Email;
	const Password = req.body.Password;
	//let PasswordVariable = await bcrypt.hash(Password, 10);

	const conexion = mysql.createConnection(conexionData);
	conexion.query('SELECT * FROM usuarios where Email = ?', Email , (error, results) =>
	{
		if(error) res.status(500).send(error);
		else
		{
			if(results.length > 0)
			{
				if(Password == results[0].Password)
				{
					res.status(200).send(results[0].Usuario);
				}
				else res.status(200).send("Mala password");
			}
			else res.status(200).send("Mal email");
		}
		
	});
	conexion.end();
});

app.post('/api/usuarios', async (req, res) => 
{
    //FALTA LA ENCRIPTACION DE LA CONTRASEÑA PERO NO SE COMO
    const Usuario = req.body.Usuario;
    const Email = req.body.Email;
    const Password = req.body.Password;
    //PasswordVariable = Password.toString();
    //PasswordVariable = await bcrypt.hash(Password, 10);

    var BanderaEmail = false;
    var BanderaUsuario = false;

    const conexion = mysql.createConnection(conexionData);
    const Valores = [Email, Usuario];
    conexion.query('SELECT * FROM usuarios WHERE Email = ? OR Usuario = ?', Valores , function(error, resp) 
    {
        if(error) res.status(500).send(error);
        for(var i = 0 ; i < resp.length ; i++)
        {
            if(Usuario == resp[i].Usuario) BanderaUsuario = true;
            if(Email == resp[i].Email) BanderaEmail = true; 
        }
        if(BanderaEmail && BanderaUsuario) res.status(200).send("Usuario Email Repetido");
        else if(!BanderaEmail && BanderaUsuario) res.status(200).send("Usuario Repetido");
        else if(BanderaEmail && !BanderaUsuario) res.status(200).send("Email Repetido");
        else if(!BanderaEmail && !BanderaUsuario)
        {
            
            conexion.query(`INSERT INTO usuarios (Usuario, Email, Password, Fecha_Creacion) VALUES ("${Usuario}","${Email}","${Password}", CURRENT_TIMESTAMP)`, function(error, results)
            {
                if(error) throw error;
                else console.log(results);
            });
            res.status(200).send("No Repetido");
            conexion.end();
        }
    }); 
   
});

app.post('/api/dashboard/:codigo', (req, res) =>
{
	const conexion = mysql.createConnection(conexionData);
	const Codigo = req.params.codigo;
    conexion.query('SELECT * FROM items WHERE Codigo = ?', Codigo , function(error, resp) 
    {
    	//Hacer la llamada aqui mismo para buscar las 2 cosas con la misma llave
    	//mandarlos al mismo tiempo
    	//recibirlo alla y ya mostrarlo en la tabla
    	conexion.query('SELECT * FROM historial where Codigo = ?', Codigo , function(error, results)
	    {
	    	if(error) throw error;
	    	var Data = new Array(results.length);
	    	Data[0] = resp[0];
	    	for(var i = 0; i < results.length ; i++)
	    	{
	    		Data[i + 1] = results[i];
	    	}
	    	res.status(200).send(Data);
	    });
        
    });
});

app.post('/api/precio', (req, res) =>
{
	const Precio = req.body.Precio;
	const Codigo = req.body.Codigo;
    const conexion = mysql.createConnection(conexionData);
	conexion.query(`UPDATE items SET Precio = '${Precio}' WHERE Codigo = '${Codigo}'`, function(error, results)
    {
        if(error) throw error;
    });
    conexion.end();
});

/*app.get('/', (req,res) =>
{
	req.session.usuario = "Juan Perez";
	req.session.rol = "Admin";
	req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;

	if(req.session.usuario)
	{
		res.send(`El usuario ${req.session.usuario} del rol ${req.session.rol} ha visitado esta pagina ${req.session.visitas} veces` + "Logeado" + req.session.usuario);
	}
	else
	{
		res.send(`El usuario ${req.session.usuario} del rol ${req.session.rol} ha visitado esta pagina ${req.session.visitas} veces` + "No Logeado");
	}
});*/

app.post('/api/dashboard', (req,res) =>
{
	const Clase = req.body.Clase;
	const Raza = req.body.Raza;
	const Material = req.body.Material;

	var ClaseSQL = (Clase == '.') ? '' : 'Clase = ?';
	var RazaSQL = (Raza == '.') ? '' : ((ClaseSQL == '') ? 'Raza = ?' : ' AND Raza = ?');
	var MaterialSQL = (Material == '.') ? '' : ((RazaSQL == '') ? 'Material = ?' : ' AND Material = ?');
	var IndexValores = 0;
	var Valores = [];
	if(Clase !== '.') 
	{
		Valores[IndexValores] = Clase;
		IndexValores = IndexValores + 1;
	} 
	if(Raza !== '.') 
	{
		Valores[IndexValores] = Raza;
		IndexValores = IndexValores + 1;
	}
	if(Material !== '.') 
	{
		Valores[IndexValores] = Material;
		IndexValores = IndexValores + 1;
	}  
	const conexion = mysql.createConnection(conexionData);

	const SQL = `SELECT * FROM items where ${ClaseSQL}${RazaSQL}${MaterialSQL}`;
	conexion.query(SQL , Valores , (error, resp) =>
	{
		res.status(200).send(resp);
	});
	conexion.end();
});

app.post('/api/setuser', (req,res) =>
{
	const Codigo = req.body.Codigo;
	const NewUser = req.body.NewUser;
	const OldUser = req.body.OldUser;
	const Price = req.body.Price;

	const conexion = mysql.createConnection(conexionData);
	conexion.query(`UPDATE items SET Usuario = '${NewUser}' WHERE Codigo = '${Codigo}'`, function(error, results)
    {
        if(error) throw error;
    });
	conexion.query('SELECT * FROM historial where Codigo = ?', Codigo , function(error, results)
    {
    	const Id = results.length + 1;
        conexion.query(`INSERT INTO historial (Codigo, Id, OldUser, NewUser, Price, Date) VALUES ("${Codigo}","${Id}","${OldUser}","${NewUser}","${Price}", CURRENT_TIMESTAMP)`, function(error, results)
        {
        	if(error) throw error;

        });
        conexion.end();
    });

});

/*app.get('/api/login', (req,res) =>
{
	res.status(200).send(req.session);
});*/

const port = process.env.port || 90;
app.listen(port, () => console.log(`Escuchando en puerto ${port}`));