package rites.sample.rserv.web;

import java.security.Principal;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@RequestMapping("/")
	public String home() {
		return "home";
	}
	
	@RequestMapping("/user")
	@ResponseBody
	public Principal user(Principal user) {
		return user;
	}
	
	@RequestMapping("/adminresource")
	@PreAuthorize("hasRole('ROLE_ADMIN') and #oauth2.hasScope('read') or (!#oauth2.isOAuth() and hasRole('ROLE_ADMIN'))")
	public String adminResource(Principal user) {
		return "{\"id\":\"" + user.getName() + "\",\"content\":\"Hello World\"}";
	}
	
	@RequestMapping(value="/userresource", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	@PreAuthorize("hasRole('ROLE_USER') and #oauth2.hasScope('read') or (!#oauth2.isOAuth() and hasRole('ROLE_USER'))")
	public String userResource(Principal user) {
		return "{\"id\":\"" + user.getName() + "\",\"content\":\"Hello World\"}";
	}
}
