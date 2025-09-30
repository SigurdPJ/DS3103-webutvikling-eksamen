using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrumpApi.Migrations
{
    /// <inheritdoc />
    public partial class fixdescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "JobDiscription",
                table: "Staff",
                newName: "JobDescription");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "JobDescription",
                table: "Staff",
                newName: "JobDiscription");
        }
    }
}
