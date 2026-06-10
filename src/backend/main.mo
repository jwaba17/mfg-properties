import EmailClient "mo:caffeineai-email/emailClient";

actor {
  public type QuoteRequest = {
    name : Text;
    email : Text;
    phone : Text;
    role : Text;
    message : Text;
  };

  public shared func submitQuote(req : QuoteRequest) : async { ok : Bool; error : ?Text } {
    let subject = "New Quote Request from MFG Properties";
    let htmlBody =
      "<h2>New Quote Request</h2>" #
      "<p><strong>Name:</strong> " # req.name # "</p>" #
      "<p><strong>Email:</strong> " # req.email # "</p>" #
      "<p><strong>Phone:</strong> " # (if (req.phone == "") "Not provided" else req.phone) # "</p>" #
      "<p><strong>Role:</strong> " # req.role # "</p>" #
      "<p><strong>Message:</strong></p><p>" # req.message # "</p>";

    let result = await EmailClient.sendServiceEmail(
      "noreply",
      ["wabasolelejonathan@gmail.com"],
      subject,
      htmlBody,
    );

    switch (result) {
      case (#ok) { { ok = true; error = null } };
      case (#err(e)) { { ok = false; error = ?e } };
    };
  };
};
