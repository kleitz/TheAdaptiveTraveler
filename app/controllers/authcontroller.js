var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}

exports.dashboard = function(req,res){

	res.render('dashboard'); 
<<<<<<< HEAD
=======
	res.redirect('/signin')
>>>>>>> 36a8f438d9bf380500bcd1358d2a707cd4558eca

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
<<<<<<< HEAD
  res.redirect('/');
=======
  res.redirect('/signin');
>>>>>>> 36a8f438d9bf380500bcd1358d2a707cd4558eca
  });

}