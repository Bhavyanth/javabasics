package com.rewards.bonusparameters.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rewards.bonusparameters.exception.UserCustomException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@GetMapping()
	public String allAccess() {
		return "Public Content.";
	}

	@PostMapping
	public String userAccess() {
		return "User Content.";
	}

	@DeleteMapping
	public String moderatorAccess() {
		return "Moderator Board.";
	}
@PutMapping
	public String adminAccess() {
	if(true) {
		throw new UserCustomException("exception");
	}
		return "Admin Board.";
	}

}
