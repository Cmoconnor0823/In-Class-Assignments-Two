package com.trilogy.app;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("test")
public class MyFirstREST {
	
	// Full route should be:
	// http://localhost:8080/my-first-rest-app/test

	@GET
    @Produces("text/html")
	public String testRest() {
		return "<h1>GET Request Worked!</h1>";
		
	}
}
