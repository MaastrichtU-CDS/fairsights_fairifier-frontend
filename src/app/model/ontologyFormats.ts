import { OntologyFormat } from './format';

export const ONTOLOGYFORMATS: OntologyFormat[] = [
    { fullName: 'Web Ontology Language', shortName: 'OWL' , extension: '.owl'},
    { fullName: 'BinaryRDF', shortName: 'BINARY', extension: '.bdf'},
    { fullName: 'JSON-LD', shortName: 'JSONLD', extension: '.jsonld'},
    { fullName: 'N3', shortName: 'N3', extension: '.n3'},
    { fullName: 'N-Quads', shortName: 'NQUADS', extension: '.nq'},
    { fullName: 'N-Triples', shortName: 'NTRIPLES', extension: '.nt'},
    { fullName: 'RDFa', shortName: 'RDFA', extension: '.rdfa'},
    { fullName: 'RDF/JSON', shortName: 'RDFJSON', extension: '.rj'},
    { fullName: 'RDF/XML', shortName: 'RDFXML', extension: '.rdf'},
    { fullName: 'TriG', shortName: 'TRIG', extension: '.trig'},
    { fullName: 'TriX', shortName: 'TRIX', extension: '.xml'},
    { fullName: 'Turtle', shortName: 'TURTLE', extension: '.ttl'}
];

export const  pickedOntologyFormat: OntologyFormat[] = [
    { fullName: 'Web Ontology Language', shortName: 'OWL' , extension: '.fo1'},
];
