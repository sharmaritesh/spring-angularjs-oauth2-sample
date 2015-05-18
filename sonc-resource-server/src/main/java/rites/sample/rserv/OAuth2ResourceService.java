package rites.sample.rserv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableAutoConfiguration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, /*securedEnabled = true, */proxyTargetClass = true)
@Import({ OAuth2ResourceConfig.class, MethodSecurityConfig.class })
@ComponentScan(basePackages = {"rites.sample.rserv.web"})
public class OAuth2ResourceService extends WebMvcConfigurerAdapter {
	public static void main(final String[] args) {
		
		SpringApplication.run(OAuth2ResourceService.class, args);
	}
}
