define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login User",
    "name": "Login",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username unique required</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password unique required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n{\n\"username\": \"JohnDoe\",\n\"password\": \"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Incorrect",
            "description": "<p>Credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Not Found\n{\n\"error\": \"No user with those credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../node-auth1-project/auth/auth-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register User",
    "name": "Register",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID (auto-increments)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n{\n\"username\": \"JohnDoe\",\n\"password\": \"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsersNotFound",
            "description": "<p>There were no users found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Not Found\n{\n\"error\": \"Trouble adding new user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../node-auth1-project/auth/auth-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request User Information",
    "name": "Users",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"username\": \"JohnDoe\",\n\"password\": \"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsersNotFound",
            "description": "<p>There were no users found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n\"error\": \"UsersNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../node-auth1-project/users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "../docs/main.js",
    "group": "e:\\Users\\Robert\\Desktop\\React Projects\\Backend\\docs\\main.js",
    "groupTitle": "e:\\Users\\Robert\\Desktop\\React Projects\\Backend\\docs\\main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "../node-auth1-project/docs/main.js",
    "group": "e:\\Users\\Robert\\Desktop\\React Projects\\Backend\\node-auth1-project\\docs\\main.js",
    "groupTitle": "e:\\Users\\Robert\\Desktop\\React Projects\\Backend\\node-auth1-project\\docs\\main.js",
    "name": ""
  }
] });
