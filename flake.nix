{
  description = "Node development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";

  outputs = { self, nixpkgs }:
  let
    for = system: let pkgs = import nixpkgs { inherit system; }; in {
      devShells = {
        default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
            pkgs.yarn
            pkgs.nodePackages.typescript
          ];
        };
      };
    };
  in
  {
    devShells.x86_64-linux = (for "x86_64-linux").devShells;
  };
}
