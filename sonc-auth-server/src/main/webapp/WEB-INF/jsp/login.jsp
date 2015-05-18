<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html lang="en">
<head>
<title>AdSocKs - Login</title>

<meta name="viewport" content="width=device-width, initial-scale=1" />

<script src="/static/js/jquery-1.11.0.min.js"></script>
<script src="/static/bootstrap/3.1.1/js/bootstrap.min.js"></script>

<link href="/static/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body style="background-color: #f7f7f7">
	<div class="container">
		<div id="loginbox" style="margin-top: 50px;"
			class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
			<div class="panel panel-info">
				<div class="panel-heading">
					<div class="panel-title">Sign In</div>
				</div>

				<div style="padding-top: 30px;" class="panel-body">

					<div style="display: none" id="login-alert" class="alert alert-danger col-sm-12">
					</div>
					<%-- <p th:if="${param.logout}" class="alert alert-success">You have been logged out</p>
					<p th:if="${param.error}" class="alert alert-danger">There was an error, please try again</p> --%>
					
					<form id="loginform" class="form-horizontal" role="form" action="/login" method="POST">

						<div style="margin-bottom: 25px" class="input-group">
							<span class="input-group-addon"><i
								class="glyphicon glyphicon-user"></i></span> <input id="login-username"
								type="text" class="form-control" name="username" 
								placeholder="username or email" required="required" autofocus="autofocus" />

						</div>

						<div style="margin-bottom: 25px" class="input-group">
							<span class="input-group-addon"><i
								class="glyphicon glyphicon-lock"></i></span> <input id="login-password"
								type="password" class="form-control" name="password" 
								placeholder="password" required="required" />
						</div>

						<div style="margin-top: 10px" class="form-group">
							<!-- Button -->
							<div class="col-sm-12 controls">
								<input type="submit" id="login" value="Login" class="btn btn-success" />
								<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
							</div>
						</div>
					</form>



				</div>
			</div>
		</div>
	</div>
	
</body>
</html>