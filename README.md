# Library-Management-System



### Table: authentication_system

| Column    | Type                   | Nullable | Default |
|-----------|------------------------|----------|---------|
| loginid   | character varying(50)  | not null |         |
| pwd       | character varying(255) | not null |         |
| staff_id  | integer                | not null |         |

- Indexes:
  - `authentication_system_pkey` PRIMARY KEY, btree (loginid)
- Foreign-key constraints:
  - `authentication_system_staff_id_fkey` FOREIGN KEY (staff_id) REFERENCES staff(staff_id)

### Table: authors

| Column       | Type                   | Nullable | Default                                   |
|--------------|------------------------|----------|-------------------------------------------|
| author_id    | integer                | not null | nextval('authors_author_id_seq'::regclass)|
| author_name  | character varying(100) | not null |                                           |

- Indexes:
  - `authors_pkey` PRIMARY KEY, btree (author_id)
- Referenced by:
  - TABLE `book` CONSTRAINT `book_author_id_fkey` FOREIGN KEY (author_id) REFERENCES authors(author_id)

### Table: book

| Column     | Type                   | Nullable | Default                                 |
|------------|------------------------|----------|-----------------------------------------|
| author_id  | integer                | not null |                                         |
| title      | character varying(255) | not null |                                         |
| available  | integer                | not null |                                         |
| total      | integer                | not null |                                         |
| book_id    | integer                | not null | nextval('book_book_id_seq'::regclass)   |

- Indexes:
  - `book_pkey` PRIMARY KEY, btree (book_id)
- Foreign-key constraints:
  - `book_author_id_fkey` FOREIGN KEY (author_id) REFERENCES authors(author_id)
- Referenced by:
  - TABLE `issues_returns` CONSTRAINT `fk_issue_returns` FOREIGN KEY (book_id) REFERENCES book(book_id)
- Triggers:
  - `non_neg` BEFORE INSERT OR UPDATE ON `book` FOR EACH ROW EXECUTE FUNCTION `books_not_neg()`


### Table: issues_returns

| Column          | Type                   | Nullable | Default                                         |
|-----------------|------------------------|----------|-------------------------------------------------|
| issue_return_id | integer                | not null | nextval('issues_returns_issue_return_id_seq'::regclass) |
| member_id       | integer                |          |                                                 |
| issue_date      | date                   |          |                                                 |
| return_date     | date                   |          |                                                 |
| status          | character varying(20)  | not null |                                                 |
| book_id         | integer                |          |                                                 |

- Indexes:
  - `issues_returns_pkey` PRIMARY KEY, btree (issue_return_id)
- Foreign-key constraints:
  - `fk_issue_returns` FOREIGN KEY (book_id) REFERENCES book(book_id)
  - `issues_returns_member_id_fkey` FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE

### Table: members

| Column        | Type                   | Nullable | Default                                     |
|---------------|------------------------|----------|---------------------------------------------|
| member_id     | integer                | not null | nextval('members_member_id_seq'::regclass)  |
| name          | character varying(100) | not null |                                             |
| email         | character varying(100) | not null |                                             |
| password      | character varying(255) | not null |                                             |
| address       | character varying(255) |          |                                             |
| phone_number  | character varying(20)  |          |                                             |

- Indexes:
  - `members_pkey` PRIMARY KEY, btree (member_id)
- Referenced by:
  - TABLE `issues_returns` CONSTRAINT `issues_returns_member_id_fkey` FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE

### Table: staff

| Column       | Type                   | Nullable | Default                                    |
|--------------|------------------------|----------|--------------------------------------------|
| staff_id     | integer                | not null | nextval('staff_staff_id_seq'::regclass)    |
| staff_name   | character varying(100) | not null |                                            |

- Indexes:
  - `staff_pkey` PRIMARY KEY, btree (staff_id)
- Referenced by:
  - TABLE `authentication_system` CONSTRAINT "authentication_system_staff_id_fkey" FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
