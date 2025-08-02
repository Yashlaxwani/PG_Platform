import axios from "axios";

export async function authFormAction({ request }) {
  const formData = await request.formData();
  const url = new URL(request.url);
  const pathname = url.pathname;
  const isSignUp = pathname.includes("signup");

  if (isSignUp) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const terms = formData.get("terms");

    const errors = [];

    if (!name || name.trim().length < 2) {
      errors.push("Full name must be at least 2 characters long");
    }

    if (!email || !email.includes("@")) {
      errors.push("Please provide a valid email address");
    }

    if (!password || password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }

    if (!terms) {
      errors.push("You must agree to the Terms of Service and Privacy Policy");
    }

    if (errors.length > 0) {
      return {
        success: false,
        errors: {
          name:
            !name || name.trim().length < 3
              ? "Full name must be at least 3 characters long"
              : null,
          email:
            !email || !email.includes("@")
              ? "Please provide a valid email address"
              : null,
          password:
            !password || password.length < 6
              ? "Password must be at least 6 characters long"
              : null,
          confirmPassword:
            password !== confirmPassword ? "Passwords do not match" : null,
          terms: !terms
            ? "You must agree to the Terms of Service and Privacy Policy"
            : null,
        },
        message: "Validation failed",
      };
    }

    await axios.post("http://localhost:8000/graphql", {
      query: `
    mutation AddPg($data: PgInput!) {
      addPg(data: $data) {
        id
        name
        email
      }
    }
  `,
      variables: {
        data: {
          name: "123",
          email: "123@example.com",
          password: "password123",
          phoneNumber: "1234567890",
          address: "123 Main St",
          city: "Anytown",
          state: "CA",
          postalCode: "12345",
        },
      },
    });

    return {
      success: true,
      message: "Sign up form validation successful!",
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password,
        termsAccepted: !!terms,
      },
    };
  } else {
    const secretKey = formData.get("secretKey");
    const password = formData.get("password");

    const errors = [];

    if (!secretKey || secretKey.trim().length < 3) {
      errors.push("Secret key must be at least 3 characters long");
    }

    if (!password || password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }

    if (errors.length > 0) {
      return {
        success: false,
        errors: {
          secretKey:
            !secretKey || secretKey.trim().length < 8
              ? "Secret key must be at least 8 characters long"
              : null,
          password:
            !password || password.length < 6
              ? "Password must be at least 6 characters long"
              : null,
        },
        message: "Validation failed",
      };
    }

    // // const loginResponse = await login({
    // //   secretKey: secretKey.trim(),
    // //   password,
    // // });

    // if (!loginResponse.success) {
    //   return {
    //     success: false,
    //     message: loginResponse.message || "Login failed",
    //   };
    // }

    return {
      success: true,
      message: "Sign in form validation successful!",
      data: {
        user: "Tanish",
        token: "Tanish123",
      },
    };
  }
}
