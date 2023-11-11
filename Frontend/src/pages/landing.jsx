// import { useState } from "react";
import "./styles/landing.css";
import { Route, Link } from 'react-router-dom';
// import { AddBook } from "../components/addBook";
import Sidebar  from "../components/sidebar";
import TopBar from "../components/topbar";
import Dashboard from "../components/dashboard";
import IssueReturn from "../components/issueReturn";

export const Landing = () => {
  // const [isAddBookVisible, setIsAddBookVisible] = useState(false);

  // const toggleAddBook = () => {
  //   setIsAddBookVisible(!isAddBookVisible);
  // };

  return (
    <div>
      {/* <TopBar activeLink="Dashboard" name="Librarian" /> */}
      <IssueReturn />
      {/* <Sidebar /> */}
      {/* <Dashboard /> */}
      {/* <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The Great Gatsby</td>
            <td>F. Scott Fitzgerald</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>2</td>
            <td>To Kill a Mockingbird</td>
            <td>Harper Lee</td>
            <td>No</td>
          </tr>
          <tr>
            <td>3</td>
            <td>1984</td>
            <td>George Orwell</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <button onClick={toggleAddBook}>Add Book</button>
      {isAddBookVisible && <AddBook />} */}
    </div>
  );
};

