using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrumpApi.Migrations
{
    /// <inheritdoc />
    public partial class V5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MerchType",
                table: "Merch",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "MerchName",
                table: "Merch",
                newName: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Merch",
                newName: "MerchType");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Merch",
                newName: "MerchName");
        }
    }
}
