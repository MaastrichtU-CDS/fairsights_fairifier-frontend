import { Format } from './format';

export const FORMATS: Format[] = [
    { fullName: "BinaryRDF", shortName: "BINARY", extentsion: ".bdf" }
	{ fullName: "JSON-LD", shortName: "JSONLD", extension: ".jsonld" }
    { fullName: "N3", shortName: "N3", extension: ".n3" }
    { fullName: "N-Quads", shortName: "NQUADS" }
	{ fullName: "N-Triples", shortName: "NTRIPLES", extension: ".nt" }
    { fullName: "RDFa", shortName: "RDFA", extension: ".rdfa"}
	{ fullName: "RDF/JSON", shortName: "RDFJSON, extension: ".rj"}
	{ fullName: "RDF/XML", shortName: "RDFX", extension: ".rdf"}
	{ fullName: "TriG", shortName: "TRIG", extension: ".trig"}
	{ fullName: "TriX", shortName: "TRIX", extension: ".xml"}
	{ fullName: "Turtle", shortName: "TURTLE", extension: ".ttl"} 
];

export const pickedFormat: Format[] = [
    { name: "N3", shortName: "N3", extension: ".n3"},
];
