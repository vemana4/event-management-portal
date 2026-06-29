import { describe, it, expect } from "vitest";
import { ProposeEventBody, CreateRegistrationBody } from "@workspace/api-zod";

describe("Event Portal Zod Schema Validation", () => {
  it("should validate a valid event proposal body", () => {
    const validData = {
      eventName: "Hackathon 2026",
      festName: "Chanakya Fest",
      categoryId: 1,
      venueId: 2,
      eventDate: "2026-06-29T10:00:00Z",
      registrationFee: "150.00",
      isCompetition: true,
      facultyCoordinatorName: "Dr. Smith",
    };

    const result = ProposeEventBody.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should fail validation if required fields are missing", () => {
    const invalidData = {
      eventName: "No Category and Venue",
    };

    const result = ProposeEventBody.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should validate a registration request", () => {
    const validRegistration = {
      fullName: "Jane Doe",
      email: "jane@example.com",
      mobileNumber: "9876543210",
      collegeId: 1,
      course: "Computer Science",
      yearOfStudy: 3,
      eventId: 4,
    };

    const result = CreateRegistrationBody.safeParse(validRegistration);
    expect(result.success).toBe(true);
  });
});
