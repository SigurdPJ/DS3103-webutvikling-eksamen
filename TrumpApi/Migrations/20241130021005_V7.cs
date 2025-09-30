using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrumpApi.Migrations
{
    /// <inheritdoc />
    public partial class V7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Thought",
                table: "Thoughts",
                newName: "Phrase");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phrase",
                table: "Thoughts",
                newName: "Thought");
        }
    }
}
