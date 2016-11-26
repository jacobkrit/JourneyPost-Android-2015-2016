package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ProcessFormServlet
 */
public class ProcessFormServlet extends HttpServlet {
	 
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	private void processRequest(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		
		response.setContentType("text/html");
		
		PrintWriter out = response.getWriter();
		
		try {
		String username = request.getParameter("username");
		if(username != null) {
			if(username.equals("lab1") || username.equals("testuser")) {
				out.println("<html><head><title>Lab 1</title></head>");
				out.println("<body><h1>Username " + username + " is reserved </h1>" +
						    "<a href=\"./registration_simple.html\">Try again here</a></html>");
			}else {
				out.println("<html><head><title>Lab 1</title></head>");
				out.println("<body><h1>Registration successful!</h1></html>");
				out.println("<body><h1>Madame/Mister " + username + " go check your options again at </h1>" +
					    "<a href=\"./index.html\">Home Page</a></html>");
			}
		}
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
        finally {
            out.close();
        }
	
			
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	
	
}
