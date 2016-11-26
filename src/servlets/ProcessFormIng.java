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
public class ProcessFormIng extends HttpServlet {
	 
       

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
		String kind = request.getParameter("kind");
		String ing = request.getParameter("ing");
		if (kind.equals("vegetarian")){
			if (ing.equals("beans")) out.println("<body>If you like " + ing + " and you are a " + kind + " you should eat " +"<a href=\"./rec1.html\">bean soup.</a></html>");
			if (ing.equals("tomato")) out.println("<body>If you like " + ing + " and you are a " + kind + " you should eat " +"<a href=\"./rec3.html\">tomato soup.</a></html>");
		}
		if (kind.equals("meat-guy")){
			if (ing.equals("beans")) out.println("<body>If you like " + ing + " and you are a " + kind + " you should eat " +"<a href=\"./rec2a.html\">chilli beans.</a></html>");
			if (ing.equals("tomato")) out.println("<body>If you like " + ing + " and you are a " + kind + " you should eat " +"<a href=\"./rec4.html\">beef tomato.</a></html>");		}
		out.println("<body><br><br>If you changed your mind, go pick again " +
			    "<a href=\"./ing.html\">with new ingredients.</a></html>");
		out.println("<body><br><br>Or return to "+
			    "<a href=\"./index.html\">home page.</a></html>");
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