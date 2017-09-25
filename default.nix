let
  pkgs = import <nixpkgs> {};
  stdenv = pkgs.stdenv;

in stdenv.mkDerivation rec {
  name = "usttle-react";

  version = "8.4.0";
  node = pkgs.nodejs-8_x.overrideDerivation (oldAttrs:{
    version = "8.4.0";
    name = "nodejs-8.4.0";
    src = pkgs.fetchurl {
      url = "https://nodejs.org/download/release/v${version}/node-v${version}.tar.xz";
      sha256 = "5d5aa2a101dcc617231a475812eb8ed87cac21491f1dcc7997b9dd463563f361";
    };
  });

  buildInputs = [
    node
  ];

  shellHook = ''
    mkdir -p .nix-npm-cache
    mkdir -p .nix-npm
    export NPM_CONFIG_CACHE=$PWD/.nix-npm-cache
    export NPM_CONFIG_PREFIX=$PWD/.nix-npm

    export PATH="$PWD/.nix-npm/bin:$PATH"
  '';

}
