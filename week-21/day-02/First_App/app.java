package com.trilogy.app;

import java.util.ArrayList;

public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			//create string variables
			String firstName ="Caitlin";
			String lastName = "O'Connor";
			//int age = 28;
			//boolean isMarried = false;
			//char middleInital = "M";
			// this is needed for the for loop counter
			counter(3,8);
			
			// Equivalent of console.log()
			System.out.println("Hello " + getFullName(firstName, lastName));     
			System.out.println(getSum(12,13));  
			
			ArrayList<String> names = new ArrayList<>();
			names.add("John");
			names.add("Sean");
			names.add("Rodrigo");
			names.add("Will");
			names.add("Caitlin");
			getValues(names);
			// this will print out the length of the array
			System.out.println(names.size());    
	    }
	
	    // this concats the first and last name to make a full name
	    public static String getFullName(String firstName, String lastName) {
	        String fullName = firstName + " " + lastName;   
	        return fullName;
	    }
	    
	    // this is out basic addition method (think java script functions)
	    public static String getSum(int firstOp, int secondOp) {
	        int  sum = firstOp + secondOp;
	        String statement = "The sum of " + firstOp + " and " + secondOp + " is " + sum; 
	        return statement;
	    }
	    
	    // this is the for loop that prints out the numbers between the 2 numbers defined in the counter
	    
	    public static void counter(int start, int finish) {
	    	if( start < finish) {
	    		for(int i = start; i < finish; i++) {
	    			System.out.println(i);
	    		}
	    	}else {
	    		System.out.println("Enter the correct values you goof!!");
	    	}
	    }
	    
	    // this method loops through the name array and prints out each name
	    // this method was moved to the Utilities class
	    public static void getValues(ArrayList<String> arr) {
			for (int i = 0; i < arr.size(); i++) {
				System.out.println(arr.get(i));
			}
		}
	}

