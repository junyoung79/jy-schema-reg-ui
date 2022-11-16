import http from '../common/httpCommon'

// https://docs.confluent.io/platform/current/schema-registry/develop/api.html#schemas
// need validate check
class SchemaService {

    /**
     * @response
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * ["subject1", "subject2"]
     */
    getSubjects () {
        return http.get("/subjects")
    }

    /**
     *
     * @param id
     * @response
     *         HTTP/1.1 200 OK
     *         Content-Type: application/vnd.schemaregistry.v1+json
     *
     *         {
     *           "schema": "{\"type\": \"string\"}"
     *         }
     *
     */
    getSchemasFromId(id:number) {

        return http.get("/schemas/ids/${id}")
    }

    /**
     *
     * @param id
     * @response
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * "string"
     */
    getSchemaValueFromId(id:number) {
        return http.get("/schemas/ids/${id}/schema")
    }

    /**
     *
     * @param id
     * @response
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * [{"subject":"test-subject1","version":1}]
     */
    getVersionsFromId(id:number) {
        return http.get("GET /schemas/ids/${id}/versions")
    }

    /**
     *
     * @param subject
     * @response
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * [
     *   1, 2, 3, 4
     * ]
     */
    getVersionsFromSubject(subject:string) {
        return http.get("/subjects/${subject}/versions")
    }

    /**
     * ref : https://docs.confluent.io/platform/current/schema-registry/develop/api.html#mode
     * @param subject
     * @param version
     * @response
     * Example response (AVRO):
     *
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * {
     *   "name": "test",
     *   "version": 1,
     *   "schema": "{\"type\": \"string\"}"
     * }
     * Example response (PROTOBUF):
     *
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * {
     *   "name": "test",
     *   "version": 1,
     *   "schemaType": "PROTOBUF"
     *   "schema": "{\"type\": \"string\"}"
     * }
     */
    getFromSubjectVersion(subject:string, version:number) {
        return http.get("/subjects/${subject}/versions/${version}")
    }

    /**
     *
     * @param subject
     * @param version
     * @response
     * HTTP/1.1 200 OK
     * Content-Type: application/vnd.schemaregistry.v1+json
     *
     * {"type": "string"}
     */
    getSchemaFromSubjectVersion(subject:string, version:number) {
        return http.get("/subjects/${subject}/versions/${version}/schema")
    }

}

export default new SchemaService();