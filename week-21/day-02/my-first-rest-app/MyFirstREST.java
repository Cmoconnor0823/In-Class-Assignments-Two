package com.trilogy.app;

import javax.ws.rs.GET;
import javax.ws.rs.Path; 
import javax.ws.rs.Produces;

@Path("test")
public class MyFirstREST {
		
		@GET
		@Produces("text/html")
		public String testRest() {
			return"<h1>Get request Worked</h1>";
		}

}
