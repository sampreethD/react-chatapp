function Header() {
  const logout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };
  return (
    <div style={{ display: "flex" }}>
      <h1 className="header">React chat App 🚀</h1>
      {localStorage.getItem('username') &&
      <span onClick={logout} style={{ cursor: "pointer" }} className="logout">
        logout
      </span>}
    </div>
  );
}

export default Header;
