Problem:
  Not sure how to setup directory to organize environments for
  javascript for now. However, I want to keep in mind that in
  the future I will be implementing an API for the application.
  Therefore, it would be nice to have the overall project 
  structure to avoid figuring out where things go in the future.

Desired Value:
  Implement test framework for javascript.
  Avoid conflicts with python environment in the future.

Proposed solution:
  (Suggested by chatgpt)
  my_app/
  │
  ├── backend/                  # Flask app (future API)
  │   ├── app/
  │   │   ├── __init__.py
  │   │   ├── routes.py
  │   │   ├── models.py
  │   │   └── ...
  │   ├── tests/                # Python unit tests (pytest/unittest)
  │   │   └── test_routes.py
  │   ├── requirements.txt
  │   └── run.py
  │
  ├── frontend/                 # Your current HTML/CSS/JS app
  │   ├── src/
  │   │   ├── js/
  │   │   │   ├── view_task.js
  │   │   │   ├── utils.js
  │   │   │   └── ...
  │   │   ├── css/
  │   │   │   └── styles.css
  │   │   └── index.html
  │   ├── tests/                # JS unit tests (Jest)
  │   │   └── view_task.test.js
  │   ├── package.json
  │   └── jest.config.js        # Jest config (optional)
  │
  ├── README.md
  └── .gitignore

### Contract

Pre-conditions (requirements):
- At least 5 small requirements

Post-contitions (results):
- How will accountability be delivered?




